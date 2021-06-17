function draw{
  background(0, 0, 0);
  noStroke();
  fill(255, 0, 0, 10);
  ellipse(width/2 , height/2, 200);
  ellipse(width/2 +100, height/2 - 110, 120);
  ellipse(width/2 -100, height/2 - 110, 120);
}


function draw{
  background(0, 0, 0, 20);
  noStroke();
  fill(255, 0, mouseX/4, mouseY/4);
  ellipse(mouseX, mouseY, 200);
  ellipse(mouseX + 100, mouseY - 110, 120);
  ellipse(mouseX - 100, mouseY - 110, 120);
}
