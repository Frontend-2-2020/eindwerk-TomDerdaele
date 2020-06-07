import paper from "paper";
import SimplexNoise from "simplex-noise";

// DIT is de PAPER.JS functie , gemaakt met wat hulp van het net, 
// maar volledig naar eigen hand gezet.

const cursorCircle = (canvasProp, color) => {
  // startpostitie van de cursor, net buiten de viewport
  let clientX = -100;
  let clientY = -100;

  // muis coordinaten volgen
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  let lastX = 0;
  let lastY = 0;
  let isStuck = false;
  let group, stuckX, stuckY;

  // setup van de paper.js canvas
  const canvas = canvasProp.current;
  const shapeBounds = {
    width: 150,
    height: 150,
  };
  paper.setup(canvas);
  const strokeColor = color;
  const fillColor = color;
  const strokeWidth = 1;
  const segments = 8;
  const radius = 15;

  // setup voor the noisy circle
  const noiseScale = 140; // hoger is trager
  const noiseRange = 20; // hoeveelheid vervorming
  let isNoisy = false; // state

  // setup van de cirkel, is eigenlijk een achthoek met afgeronde hoeken :)
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth(); // hoeken afronden
  group = new paper.Group([polygon]);
  group.applyMatrix = false;
  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let coordinatenGroteCirkel = [];

  // interpolatie voor het achterlopen van de grotere cirkel
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  // Dit is de paper.js functie die het object "renderd" op het canvas
  paper.view.onFrame = (event) => {

    // checken of de cursor kan "plakken" aan de link en de bijhorende animatie
    if (!isStuck) {
      lastX = lerp(lastX, clientX, 0.2);
      lastY = lerp(lastY, clientY, 0.2);
      group.position = new paper.Point(lastX, lastY);
      polygon.fillColor = null;
    } else if (isStuck) {
      lastX = lerp(lastX, stuckX, 0.2);
      lastY = lerp(lastY, stuckY, 0.2);
      group.position = new paper.Point(lastX, lastY);
      polygon.fillColor = fillColor;
    }

    if (isStuck && polygon.bounds.width < shapeBounds.width) {
      polygon.scale(4);
    } else if (!isStuck && polygon.bounds.width > 30) {
      if (isNoisy) {
        polygon.segments.forEach((segment, i) => {
          segment.point.set(coordinatenGroteCirkel[i][0], coordinatenGroteCirkel[i][1]);
        });
        isNoisy = false;
        coordinatenGroteCirkel = [];
      }
      const scaleDown = 0.25;
      polygon.scale(scaleDown);
    }

    // Als de circel aan de link "kleeft", vervorming toevoegen uit simplex noise
    if (isStuck && polygon.bounds.width >= shapeBounds.width) {
      isNoisy = true;
      if (coordinatenGroteCirkel.length === 0) {
        polygon.segments.forEach((segment, i) => {
          coordinatenGroteCirkel[i] = [segment.point.x, segment.point.y];
        });
      }

      // Alle hoeken overlopen en vervorming toevoegen
      polygon.segments.forEach((segment, i) => {
        const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
        const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
        const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
        const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
        const newX = coordinatenGroteCirkel[i][0] + distortionX;
        const newY = coordinatenGroteCirkel[i][1] + distortionY;
        segment.point.set(newX, newY);
      });
    }
    polygon.smooth();
  };

  // Het midden van de "link-div" vinden
  const handleMouseEnter = (e) => {
    const navItem = e.currentTarget;
    const navItemBox = navItem.getBoundingClientRect();
    stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
    stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
    isStuck = true;
  };

  // reset 
  const handleMouseLeave = () => {
    isStuck = false;
  };

  // Event listener toevoegen aan link classes
  const gelinkteDoelen = document.querySelectorAll(".link");
  gelinkteDoelen.forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
  });
};

export default cursorCircle;
