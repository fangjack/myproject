var lx_pop = {
	createLeftNav: function () {
		var $fixedBox = $('<div id="fixed"></div>');
		var $uls = $('<ul></ul>');
		var $k1 = $('<li class="k1"></li><li class="k2"></li> <li class="k3"></li> <li class="k4"><div class="hidePic"> <img src="imgs/wechat.jpg"></div></li>');
		return $fixedBox.append($uls.append($k1));
	},
	createLi: function () {
		var $fixedBox = $('<div id="fixed"></div>');
		var $uls = $('<ul></ul>');
		var $k1 = $('<li class="k1"></li><li class="k2"></li> <li class="k3"></li> <li class="k4"><div class="hidePic"> <img src="imgs/wechat.jpg"></div></li>');
		var $li = ('<li id="topbtn"><a href=""></a></li>');
		$uls.append($k1);
		$uls.append($li).on("click", function(e) {
			e.preventDefault();
			// document.documentElement.scrollTop = document.body.scrollTop = 0;
			// $(document.documentElement).animated({scrollTop: '0'}, 800);
			// $(document.body).animated({scrollTop: '0'}, 800);
			$("html,body").animate({ scrollTop:0}, 500);
		});
		return $fixedBox.append($uls);
	}
};







/*
 fixed: function () {
 var $fixedBox = ('<div id="fixed"></div>');
 var $uls = ('<ul></ul>');
 var $service = ('');
 return $fixedBox.append($uls.append($service));
 }
*/
/*
<li class="k1"></li>
<li class="k2"></li>
<li class="k3"></li>
<li class="k4">
	<div class="hidePic">
		<img src="../imgs/wechat.jpg">
	</div>
</li>
*/