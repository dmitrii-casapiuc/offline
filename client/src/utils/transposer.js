'use strict';

(function($){
	$.fn.transpose = function(options) {
		var opts = $.extend({}, $.fn.transpose.defaults, options);
		
    var currentKey = null;
    
    var videlit = [
      '1|', '2|', '3|', '4|', '5|', '6|', 
      '1:', '2:', '3:', '4:', '5:', '6:', '7:', '8:', '9:', '0:', 
      'вступление:', 'куплет:', 'припев:', 'переход:', 'реп:', 'мост:', 'мостик:', 'вставка:', 'бридж:', 'инструментал:', 'проигрыш:', 'запев:', 'концовка:', 'кода:', 
      'intro:', 'verse:', 'chorus:', 'pre chorus:', 'pre-chorus:', 'bridge:', 'instrumental:', 'ending:', 'outro:', 'interlude:', 'rap:', 'spontaneous:', 'refrain:', 'tag:', 'coda:', 'channel:', 'breakdown:', 'hook:', 
      'приспів:', 'брідж:', 'заспів:', 'міст:', 'програш:', 'перехід:', 'інтро:', 'повтор:', 'кінець:', 
      'прыпеў:', 'прысьпеў:', 
      'strofă:', 'refren:', 'verso:', 'coro:', 'puente:', 'refrão:', 'parte:', 'strofa:', 'zwrotka:'
      ];
		
		var keys = [
			{ name: 'Ab', value: 0, type: 'F' },
			{ name: 'A', value: 1, type: 'N' },
			{ name: 'A#', value: 2, type: 'S' },
			{ name: 'Bb', value: 2, type: 'F' },
			{ name: 'H', value: 3, type: 'N' },
			{ name: 'C', value: 4, type: 'N' },
			{ name: 'C#', value: 5, type: 'S' },
			{ name: 'Db', value: 5, type: 'F' },
			{ name: 'D', value: 6, type: 'N' },
			{ name: 'D#', value: 7, type: 'S' },
			{ name: 'Eb', value: 7, type: 'F' },
			{ name: 'E', value: 8, type: 'N' },
			{ name: 'F', value: 9, type: 'N' },
			{ name: 'F#', value: 10, type: 'S' },
			{ name: 'Gb', value: 10, type: 'F' },
			{ name: 'G', value: 11, type: 'N' },
			{ name: 'G#', value: 0, type: 'S' }
		];
		
		var renderChords = function(){
			$('#song_chords').html('');
			$('pre span.c').each(function(){
				var src = $(this).find('img').attr('src'), parent = $(this).parent('.tooltip');
				if($(parent[0].previousSibling).text() != '/'){
					if($('#song_chords [src="'+ src +'"]').length == 0){
						$('#song_chords').append('<img class="c-img" src="'+ src +'">');
					}
				} else {
					$(this).find('*').remove();
				}
			});
		};
		
		var getKeyByName = function (name) {
			if (name.charAt(name.length-1) == "m") {
				name = name.substring(0, name.length-1);
			}
			for (var i = 0; i < keys.length; i++) {
				if (name == keys[i].name) {
					return keys[i];
				}
			}
		};
		
		var getChordRoot = function (input) {
			if (input.length > 1 && (input.charAt(1) == "b" || input.charAt(1) == "#"))
			return input.substr(0, 2);
			else
			return input.substr(0, 1);
		};
		
		var getNewKey = function (oldKey, delta, targetKey) {
			var keyValue = getKeyByName(oldKey).value + delta;
			
			if (keyValue > 11) {
				keyValue -= 12;
				} else if (keyValue < 0) {
				keyValue += 12;
			}
			
			var i=0;
			if (keyValue == 0 || keyValue == 2 || keyValue == 5 || keyValue == 7 || keyValue == 10) {
				// Return the Flat or Sharp Key
				switch(targetKey.name) {
					case "A":
					case "A#":
					case "B":
					case "C":
					case "C#":
					case "D":
					case "D#":
					case "E":
					case "F#":
					case "G":
					case "G#":
					for (;i<keys.length;i++) {
						if (keys[i].value == keyValue && keys[i].type == "S") {
							return keys[i];
						}
					}
					default:
					for (;i<keys.length;i++) {
						if (keys[i].value == keyValue && keys[i].type == "F") {
							return keys[i];
						}
					}
				}
			}
			else {
				// Return the Natural Key
				for (;i<keys.length;i++) {
					if (keys[i].value == keyValue) {
						return keys[i];
					}
				}
			}
		};
		
		var getChordType = function (key) {
			switch (key.charAt(key.length - 1)) {
				case "b":
				return "F";
				case "#":
				return "S";
				default:
				return "N";
			}
		};
		
		var getDelta = function (oldIndex, newIndex) {
			if (oldIndex > newIndex)
			return 0 - (oldIndex - newIndex);
			else if (oldIndex < newIndex)
			return 0 + (newIndex - oldIndex);
			else
			return 0;
		};
		
		var transposeSong = function (target, key) {
			var newKey = getKeyByName(key);
			
			if (currentKey.name == newKey.name) {
				return;
			}
			
			var delta = getDelta(currentKey.value, newKey.value);
			
			$("span.c", target).each(function (i, el) {
				transposeChord(el, delta, newKey);
			});
			
			currentKey = newKey;
		};
		
		var transposeChord = function (selector, delta, targetKey) {
			var el = $(selector);
			var oldChord = el.text();
			var oldChordRoot = getChordRoot(oldChord);
			var newChordRoot = getNewKey(oldChordRoot, delta, targetKey);
			var newChord = newChordRoot.name + oldChord.substr(oldChordRoot.length);
			el.text(newChord);
			
			var sib = el[0].nextSibling;
			if (sib && sib.nodeType == 3 && sib.nodeValue.length > 0 && sib.nodeValue.charAt(0) != "/") {
				var wsLength = getNewWhiteSpaceLength(oldChord.length, newChord.length, sib.nodeValue.length);
				sib.nodeValue = makeString(" ", wsLength);
			}
		};
		
		var getNewWhiteSpaceLength = function (a, b, c) {
			if (a > b)
			return (c + (a - b));
			else if (a < b)
			return (c - (b - a));
			else
			return c;
		};
		
		var makeString = function (s, repeat) {
			var o = [];
			for (var i = 0; i < repeat; i++) o.push(s);
			return o.join("");
		}
		
		var isChordLine = function (input) {
			var tokens = input.replace(/\s+/, " ").split(" ");
			
			// Try to find tokens that aren't chords
			// if we find one we know that this line is not a 'chord' line.
			for (var i = 0; i < tokens.length; i++) {
				if (!$.trim(tokens[i]).length == 0 && !tokens[i].match(opts.chordRegex) && tokens[i].indexOf('|') ==-1 && tokens[i].indexOf('(') ==-1 && tokens[i].indexOf(')') ==-1 && tokens[i].indexOf('-') ==-1 && tokens[i].indexOf('x2') ==-1 && tokens[i].indexOf('x3') ==-1 && tokens[i].indexOf('x4') ==-1 && tokens[i].indexOf('x5') ==-1 && tokens[i].indexOf('x6') ==-1)
				return false;
			}
			return true;
		};
		
		var wrapChords = function (input) {
			var str = input.replace(opts.chordReplaceRegex, "<a class='tooltip'><span class='c'>$1<span class='tooltip-content'><img src='https://holychords.com/files/chords/$1.png' style='min-width:64px;min-height:64px;'></span></span></a>");
			
			// Замена # на x в URL
			var i = 0;
			return str.replace(/#/g, function (match) {
				i++;
				return ( i % 2 == 0 ) ? "x" : match;
			});
		};
		
		var originalText = '', accordText = '', originalAccord = '';
		
		return $(this).each(function(index) {
			var startKey = $(this).attr("data-key");
			if (!startKey || $.trim(startKey) == "") {
				startKey = opts.key;
			}
			
			if (!startKey || $.trim(startKey) == "") {
				generate_html($(this));
				return false;
			}
			
			currentKey = getKeyByName(startKey);
			
			// Build tranpose links ===========================================
			var keyLinks = [];
			$(keys).each(function(i, key){
				if(currentKey.name == key.name){
					keyLinks.push("<a href='javascript://' class='selected ton'>" + key.name + "</a>");
				} else {
					keyLinks.push("<a href='javascript://'>" + key.name + "</a>");
				}
			});
			
			var $this = $(this);
			var keysHtml = $("<div id='keys' class='transpose-keys'></div>");
			keysHtml.html(keyLinks.join(""));

			$('a', keysHtml).on('mousedown', function(){
				$(".transpose-keys a").removeClass("selected");
				$(this).addClass("selected");

				if($(this).attr('data-toggle-text') == undefined){
					transposeSong($this, $(this).text());
					generate_html($this);
					renderChords();
					$('.chopds').show();
				}
			});
			
			$(this).before(keysHtml);

			$('[data-toggle-accords]').on('mousedown', function(){
				if($(this).attr('data-toggle-text') == ''){
					$(this).attr('data-toggle-text', $(this).html());
				}
				
				if($(this).attr('data-btn-text') == undefined){
					$(this).attr('data-btn-text', $(this).html());
				}

				if($('#music_text').attr('data-original') == undefined || $('#music_text').attr('data-original') == 'false'){
					$('#music_text').html(originalAccord).attr('data-original', 'true');
					$(this).html($(this).attr('data-toggle-text')).addClass('selected').attr('title', 'показать текст');
				} else {
					$('#music_text').html(accordText).attr('data-original', 'false');
					$(this).html($(this).attr('data-btn-text')).removeClass('selected').attr('title', 'скрыть текст');
				}

				$(this).tooltip('dispose').tooltip();

				return false;
			});
			
			$('[data-toggle-text]').on('mousedown', function(){
				if($(this).attr('data-toggle-text') == ''){
					$(this).attr('data-toggle-text', $(this).html());
				}
				
				if($(this).attr('data-btn-text') == undefined){
					$(this).attr('data-btn-text', $(this).html());
				}

				if($('#music_text').attr('data-original') == undefined || $('#music_text').attr('data-original') == 'false'){
					$('#music_text').html(originalText).attr('data-original', 'true');
					$(this).html($(this).attr('data-toggle-text')).addClass('selected').attr('title', 'показать аккорды');
				} else {
					$('#music_text').html(accordText).attr('data-original', 'false');
					$(this).html($(this).attr('data-btn-text')).removeClass('selected').attr('title', 'скрыть аккорды');
				}
				
				$(this).tooltip('dispose').tooltip();
				
				if($(this).attr('data-toggle-img') != undefined){
					$('#song_chords').toggle();
				}
				
				if($(this).attr('data-toggle-keys') != undefined){
					$('#keys').toggle();
				}

				return false;
			});
			
			// Генерация html кода
			function generate_html($this){
        console.log($this)
				var type_br = $this.html().indexOf('<br>'),
					output = [],
					lines = (type_br > 0 ? $($this).html().split("<br>") : $($this).text().split("\n"));
				
				for(var i = 0; i < lines.length; i++){
          var line = lines[i];
          
          // console.log(line)
					
					for(var n = 0; n < videlit.length; n++){
            console.log(line.toLowerCase())
						if(line.toLowerCase().indexOf(videlit[n]) != -1){
              console.log('wee')
							originalText += "\n";
							line = '<b class="videlit_line">'+ line +'</b>';
							originalAccord += line + "\n";
						}
					}
					
					if(isChordLine(line) && startKey && $.trim(startKey) != ''){
						var chords_html = wrapChords(line);
						originalAccord += '<span class="chopds">' + $.trim(chords_html.replace(/\s+/g, '    ')) + '</span>' + "\n";
						output.push('<span class="chopds">' + chords_html + '</span>');
					} else {
						originalText += line + "\n";
						output.push("<span class='text'>" + line + "</span>");
					}
				}
				
				accordText = output.join("\n");
				$($this).html(accordText);
			}
			
			generate_html($this);
			renderChords();
			
			$('.transpose-keys [data-toggle="tooltip"]').tooltip();
		});
	};
	
	$.fn.transpose.defaults = {
		chordRegex: /^[A-H][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+3|7\+5|7\+9|7b5|7b9|7sus2|7sus4|sus4|add2|add4|add6|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4|m7add11|add11|b5|-5|4)*(\/[A-H][b\#]*)*$/,
		chordReplaceRegex: /([A-H][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+3|7\+5|7\+9|7b5|7b9|7sus2|7sus4|sus4|add2|add4|add6|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4|m7add11|add11|b5|-5|4)*)/g
	};
})(jQuery);
