app.controller('VimeoController', [ '$scope', '$rootScope', '$location', '$log', '$timeout', '$compile', function($scope, $rootScope, $location, $log, $timeout, $compile) {

	$log.log('Controller initialized');
	
	var player = null;
	
	$scope.dashboardVideoUrl = 'https://player.vimeo.com/video/131565439?player_id=player_1&amp;speed=1';
	$scope.transcript = "WEBVTT\n\n00:03.768 --> 00:06.788\nSo you’re interested in learning a new programming language!\n\n00:06.788 --> 00:10.208\nLet me tell you, you’ve made a pretty good decision considering Java.\n\n00:10.504 --> 00:15.364\nJava is a powerful language for software development, and is one of the most common languages in\n\n00:15.364 --> 00:19.254\nuse amongst colleges, startups, and Fortune 500 companies.\n\n00:19.254 --> 00:25.814\nThis is because Java brings a number of features to the table that establish it as a solid evolutionary step beyond\n\n00:25.814 --> 00:30.564\nwhat came before it, and has remained competitive and functional throughout its long life.\n\n00:31.210 --> 00:34.230\nTo start, Java is an object oriented language.\n\n00:34.230 --> 00:38.230\nThis means that instead of writing code as a series of linear instructions,\n\n00:38.230 --> 00:42.520\nyou write code in discrete but related units, and access those units as needed.\n\n00:43.032 --> 00:48.602\nIt’s also platform independent, which means you only have to write your code once, and it can be run on any system.\n\n00:48.602 --> 00:55.062\nIn other words, you don’t need to write code specifically for Intel processors, or for the Windows operating system.\n\n00:55.443 --> 01:01.803\nThis is all thanks to the JVM – The Java Virtual Machine – which acts as a translator between the Java code that you write,\n\n01:01.803 --> 01:04.763\nand the machine code your operating system expects.\n\n01:05.472 --> 01:09.472\nTo get started, you’ll need to download and install the Java Development Kit,\n\n01:09.472 --> 01:13.472\nwhich is freely available from Oracle. Check the reference documentation for more information.\n\n01:14.528 --> 01:18.768\nRemember when I said that Java code is written in discrete units of related code?\n\n01:18.768 --> 01:24.268\nWell, those units are called classes, and from classes, you “instantiate” “objects.”\n\n01:24.268 --> 01:30.258\nThis is an obviously important concept to Object Oriented Programming –Which we call OOP.\n\n01:30.763 --> 01:35.533\nThink of a class as a blueprint for a car, and an object as the car itself.\n\n01:35.533 --> 01:41.723\nFrom a single blueprint, you can generate as many cars – as many instances of a car – as you need.\n\n01:42.248 --> 01:48.498\nThis is the relationship between objects and classes. You write classes, but you build and work with objects.\n\n01:49.765 --> 01:52.775\nWith this in mind, let’s look at a simple Java class:\n\n01:54.184 --> 01:59.504\nThe first line in this class is the word package, which is a reserved word, or keyword.\n\n01:59.504 --> 02:04.754\nThis means that package has a defined use, and acts as an instruction for the JVM.\n\n02:04.754 --> 02:09.764\nIn this case, it’s an organizational term, used to group related classes.\n\n02:09.764 --> 02:18.524\nIf you were writing a large program with many classes, you might find it useful to arrange those classes into packages based on their function or role.\n\n02:19.158 --> 02:21.538\nThe second line is the class definition.\n\n02:21.538 --> 02:26.278\nIt consists of an access modifier, followed by the reserved word “class,”\n\n02:26.278 --> 02:32.318\nthen the name of the class, and finally the curly braces that wrap around the contents of the class.\n\n02:34.247 --> 02:41.237\nAccess modifiers for a class determine what other classes can access the code contained in this class for their own use.\n\n02:41.237 --> 02:47.787\nThey can either be public, or left blank meaning default. We’ll discuss access modifiers in another video.\n\n02:49.450 --> 02:54.250\nJava classes can be named anything with the exception of a couple of dozen reserved words.\n\n02:54.633 --> 03:00.473\nWhen naming your classes it is considered a best practice to use a something that refers to their function in a meaningful way,\n\n03:00.473 --> 03:04.473\nand they are always written by capitalizing the first letter of each word in the name.\n\n03:04.473 --> 03:08.193\nNext is the first method called myMethod.\n\n03:08.193 --> 03:14.813\nA method is a set of instructions that may or may not take in some values, and may or may not return some value.\n\n03:15.133 --> 03:20.933\nIt also has an access modifier which can be one of public, private, protected, or default.\n\n03:21.421 --> 03:27.521\nThe term void is the return type for the method and indicates that the method returns no values.\n\n03:28.201 --> 03:33.791\nThe method title, myMethod, is followed by parenthesis that contain the input parameters.\n\n03:33.791 --> 03:35.521\nIn this case there are none.\n\n03:36.219 --> 03:39.499\nFinally the method body lies between the curly braces.\n\n03:41.213 --> 03:45.233\nThis is the location for the statements to be executed when myMethod is called.\n\n03:45.233 --> 03:48.483\nAll this method is going to do is print a phrase to the console.\n\n03:51.188 --> 03:56.778\nEvery Java program that you wish to execute must contain one class with a main method in it.\n\n03:56.778 --> 04:00.258\nThis is where the JVM will begin running your code.\n\n04:00.258 --> 04:09.248\nThe signature for the main method must always be public static void main () with a String array passed in as the input parameter.\n\n04:10.428 --> 04:13.808\nPublic indicates the method is visible to the world.\n\n04:14.250 --> 04:20.520\nStatic is a scope keyword that means the method exists before an object of the class is instantiated.\n\n04:20.520 --> 04:26.300\nTo say it another way, Static means that the method belongs to the class NOT the object.\n\n04:26.300 --> 04:30.300\nIn fact, it is globally visible to all instances of the class.\n\n04:32.469 --> 04:36.469\nVoid is the return type for this method and indicates tat nothing is return.\n\n04:38.159 --> 04:43.249\nConsider the following Java project with a class called HelloWorld having a main method.\n\n04:43.249 --> 04:47.219\nThe main method in this class tells the JVM to “begin here.”\n\n04:47.219 --> 04:54.769\nIt contains one print statement System.out.println directs the JVM to print to the open command window.\n\n04:55.453 --> 05:00.283\nIn this case eclipse shows that output on a console at the bottom of the screen.\n\n05:03.502 --> 05:06.502\nLet’s wrap up with a quick discussion of variables in Java.\n\n05:06.502 --> 05:12.762\nLike all programing languages, Java has several structures for temporarily storing data for you, called variables.\n\n05:13.237 --> 05:21.847\nJava is a strongly-typed language, which means that each variable has a data type, and can only hold onto data of that particular type.\n\n05:22.214 --> 05:27.794\nBroadly speaking, there are two forms of variables in Java: primitive and reference variables.\n\n05:28.470 --> 05:36.270\nPrimitives are what you would expect in any language: integer or int, float, boolean, char for character, etc.\n\n05:36.712 --> 05:43.262\nThese variables take up specific amounts of space in memory, and so they have specific limits on the values they can store.\n\n05:43.262 --> 05:48.762\nOn the other hand, a reference variable essentially points to the location of an object in memory.\n\n05:48.762 --> 05:56.732\nThis distinction becomes very important to understanding Java’s mechanics and quirks under the hood, and we’ll save that discussion for another video.\n\n05:57.761 --> 06:03.281\nJava has a rich set of operators for performing arithmetic or comparisons between values.\n\n06:03.281 --> 06:10.761\nOf these, the assignment operator is the most prevalent for assigning a primitive to a variable or an object to a reference.\n\n06:11.455 --> 06:16.515\nLet’s look at one last example of variable declaration and use of operators:\n\n06:20.176 --> 06:27.266\nHere we can see a number of primitive variables being declared, and assigned values with the assignment operator – the equals sign.\n\n06:28.279 --> 06:34.519\nWe can also see some basic arithmetic operations being performed, and the console output validates the results.\n\n06:35.160 --> 06:41.290\nPay attention to what happens when we divide a whole-number data type like int with another whole-number type…\n\n06:41.767 --> 06:46.557\nThe resulting answer is also a whole-number, and any decimals are truncated.\n\n06:48.176 --> 06:52.786\nThere is one other type of data structure that is important to discuss, and that is the array.\n\n06:52.786 --> 06:58.246\nAn array is a collection of primitive values or Object references, stored with an index.\n\n06:58.246 --> 07:05.266\nYou can think of an array as a row of boxes, where the first box is “index 0,” the next is “index 1” and so forth.\n\n07:05.747 --> 07:14.587\nAn array always has a fixed length or Fixed number of boxes, and a fixed data type, both of which are assigned when it is instantiated.\n\n07:15.686 --> 07:18.746\nHere is an example of several ways to create an array.\n\n07:18.746 --> 07:25.226\nOne way is to use the square brackets as shown here, where you simply state the data type, and the size of the array.\n\n07:26.064 --> 07:33.794\nIf you know what values you want inside of the array, you can also plug those values in at creation by using the curly braces as shown here.\n\n07:36.216 --> 07:41.766\nAccessing a value in an array is as simple as referring to the index location of that value.\n\n07:43.216 --> 07:47.796\nYou can also access the length property of an array by using the dot operator.\n\n";
	$scope.videoId = "";
	
	var cCue = [];
    var cues = [];
    
    function loadTranscript() {
		$log.log("Transcript intialization");
    	cues = [];
        $(".transcript").remove();
        parser = new WebVTT.Parser(window, WebVTT.StringDecoder())
        parser.oncue = function(cue) {
            cues.push(cue);
            var s = $('<span/>');
            s[0].cue = cue;
            s.html(cue.text).appendTo("#transcript").attr("time", cue.startTime).addClass("transcript").click(function(e) {
            	player.setCurrentTime(cue.startTime).then(function(seconds) {
        			$log.info("The video was seeked to given time");
        		}).catch(function(error) {
        			$log.error("Error occured while seeking the video ", error);
        		});
                $compile(s)($scope);
                e.preventDefault();
            });
        };
        parser.parse($scope.transcript);
        parser.flush();
        $('.transcript').removeClass('highlight');
        cCue = $(".transcript").first().addClass("highlight");
        
        $log.log("Transcript intialized");
	}
    
	$scope.setupVimeoPlayer = function() {
		$timeout(function() {
			player = new Vimeo.Player("videoPlayer");
			
			// --- Listeners -----
	        function onLoadProgress() {
	            player.on('progress', function(data) {
	            	//$log.log("onLoadProgress", data);
	            });
	        }
	
	        function onPlay() {
	            player.on('play', function(data) {
	            	$log.log("onPlay", data);
	            });
	        }
	
	        function onPlayProgress() {
	            player.on('timeupdate', function(data) {
	            	$log.log("onPlayProgress", data);
	            	
	            	$scope.currentTime = data.seconds;
                    $scope.timeSpent = data.seconds;
                    if ($scope.transcript != null && $scope.transcript != undefined) {
                        var spans = $(".transcript");
                        $.each(spans, function(ind, span) {
                            if (cCue[0] != span) {
                                if (span.cue != undefined) {
                                    if ($scope.currentTime >= span.cue.startTime && $scope.currentTime <= span.cue.endTime) {
                                        cCue.removeClass("highlight");
                                        cCue = $(span);
                                        cCue.addClass("highlight");
                                        var half = cCue.parent().height() / 2
                                        var top = cCue.position().top;
                                        if (top > half) {
                                            var scroll = cCue.position().top - half;
                                            cCue.parent().animate({
                                                scrollTop: cCue.parent().scrollTop() + scroll + (cCue.height() / 4)
                                            }, 200);
                                        }
                                    }
                                }
                            }
                        })
                    } else {
                        $(".transcript").remove();
                    }
	            });
	        }
	
	        function onPause() {
	            player.on('pause', function(data) {
	            	$log.log("onPause", data);
	            });
	        }
	        
	        function onSeek() {
	            player.on('seeked', function(data) {
	            	$log.log("onSeek", data);
	            });
	        }
	
	        function onFinish() {
	            player.on('ended', function(data) {
	            	$log.log("onFinish", data);
	            });
	        }
	
	        loadTranscript();
	        onLoadProgress();
	        onPlay();
	        onPlayProgress();
	        onPause();
	        onSeek();
	        onFinish();
	        
	        $scope.playVideo();
		}, 1000);
	};
	
	$scope.playVideo = function() {
		player.play().then(function() {
    		$log.info("The video was started playing");
    	}).catch(function(error) {
    		$log.error("Error occured while started playing the video ", error);
    	});
	};
	
	$scope.pauseVideo = function() {
		player.pause().then(function() {
			$log.info("The video was paused");
		}).catch(function(error) {
			$log.error("Error occured while pausing the video ", error);
		});
	};
	
	var seconds = [2, 4.5, 9, 16.3, 25.8, 7.5, 26.8, 13.8, 45.10];
	var count = 0;
	$scope.seekVideo = function() {
		player.setCurrentTime(seconds[count]).then(function(seconds) {
			$log.info("The video was seeked to given time");
		}).catch(function(error) {
			$log.error("Error occured while seeking the video ", error);
		});
		
		if (count < seconds.length - 1) {
			count += 1;
		} else {
			count = 0;
		}
	};
	
	$scope.loadVideo = function() {
		if ($scope.videoId) {
			player.loadVideo($scope.videoId).then(function(id) {
				$log.info("The video was successfully loaded");
				loadTranscript();
				$timeout(function() {
					$scope.playVideo();
				}, 1250);
			}).catch(function(error) {
				$log.error("Error occured while loading the video ", error);
			});
		}
	};
	
	$scope.getDuration = function() {
		player.getDuration().then(function(duration) {
			var minutes = Math.floor(duration / 60);
			var time = minutes + " Minutes and " + Math.floor(duration - minutes * 60) + " Seconds";
			$log.info("The duration of the video is ", time);
		}).catch(function(error) {
			$log.error("Error occured while getting the duration of the video ", error);
		});
	};
	
	$scope.setupVimeoPlayer();
} ]);