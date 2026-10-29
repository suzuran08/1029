let spriteSheet;
let frames = [];
let currentFrame = 0;
let charX, charY;
let speed = 5;
let direction = 1; // 1 代表向右，-1 代表向左

function preload() {
  // 使用相對路徑載入同資料夾下的圖片
  spriteSheet = loadImage('walk.png');
}

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 圖片總寬 535，共 9 張，計算單張寬度
  let frameW = spriteSheet.width / 9; 
  let frameH = spriteSheet.height; 
  
  // 將精靈圖切割並存入 frames 陣列
  for (let i = 0; i < 9; i++) {
    let img = spriteSheet.get(i * frameW, 0, frameW, frameH);
    frames.push(img);
  }
  
  // 角色初始位置在畫面中心
  charX = width / 2;
  charY = height / 2;
  
  imageMode(CENTER);
}

function draw() {
  // 背景顏色 #a7c957
  background('#a7c957');
  
  // 鍵盤控制 (68 為 D 鍵，65 為 A 鍵)
  if (keyIsDown(68)) { 
    charX += speed;
    direction = 1;
  } else if (keyIsDown(65)) { 
    charX -= speed;
    direction = -1;
  }
  
  // 繪製角色
  push();
  translate(charX, charY);
  scale(direction, 1); // 根據 direction 決定是否水平翻轉
  
  let index = floor(currentFrame) % frames.length;
  image(frames[index], 0, 0);
  pop();
  
  // 動畫播放速度 (數字越大播放越快)
  currentFrame += 0.2; 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}