
#Tab切换组件，jquery组件
应用demo ：index.js
  
    <div class="etabs" id="show">
  	 <div class="tab checkedtab" title="首页">
  	 	<p>您现在选择的是首页</p>
  	 	<p>欢迎您的到来</p>
  	 </div>
  	 <div class="tab" title="javascript知识">
  	 	<p>对象建立，继承，闭包，作用域，事件</p>
  	 	<p>你都理解了吗</p>
  	 </div>
     <div class="tab" title="css知识">
       css是表示层，是渲染界面的
     </div>
  </div>

//然后调用js里的组件
 $(document).ready(function() {
        $('.etabs').tabs();
    });
