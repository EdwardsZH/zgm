# 各种手写

## 简单版双向数据绑定
``` html
<div id="app"> 
  <input type="text" id="txt">
  <p id="show-txt"></p>
</div>

<!-- 实现简单的数据绑定 -->
<script>
  var obj = {}
  Object.defineProperty(obj, 'txt', {
    get: function() {
      return obj;
    },
    set: function(newValue) {
      document.getElementById('txt').value = newValue;
      document.getElementById('show-txt').innerHTML = newValue;
    }
  })
  document.addEventListener('keyup', function(e) {
    obj.txt = e.target.value;
  })
</script>
```
