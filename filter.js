var isArray = Array.isArray;

function identity(value) {
  return value;
}

// filter功能（仅对数组有效）
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

// 基本迭代器实现
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

function filter(collection, predicate) {
  // 暂时迭代数组
  // var func = isArray(collection) ? arrayFilter : baseFilter;

  return arrayFilter(collection, baseIteratee(predicate, 3));
}

// 测试
filter([1,2,3], function (item) {
	console.log(item);
});