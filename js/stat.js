'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var START_X = 120;
var START_Y = 240;
var COLUMN_WIDTH = 40;
var MAX_COLUMN_HEIGHT = 150;
var GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'center';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], START_X + (GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - 10);
    var saturation = 10 * i;
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(250, ' + saturation + '%, 50%)';
    var columnHeight = (MAX_COLUMN_HEIGHT * Math.round(times[i]) * (-1)) / maxTime;
    console.log(START_Y + columnHeight)
    ctx.fillText(Math.round(times[i]), START_X + (GAP + COLUMN_WIDTH) * i, START_Y + columnHeight - 10);
    ctx.fillRect(START_X + (GAP + COLUMN_WIDTH) * i, START_Y, COLUMN_WIDTH, columnHeight);
  }

};
