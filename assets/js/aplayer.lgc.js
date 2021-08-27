 const ap8 = new APlayer({
			element: document.getElementById('aplayer'),
			mutex: true,
			theme: '#ad7a86',
			order: 'random',
			lrcType: 3,
			fixed: true,
		});
		$.ajax({
			url: 'https://api.mizore.cn/meting/api.php?server=netease&type=playlist&id=490559771',
			success: function(list) {
			    ap8.list.add(list);
			}
		});
