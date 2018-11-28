//taking the varilables 
var staticCache='restaurant';
//taking all files nd images as array elements
var staticCacheData= ['/',
					'./index.html',
					'./restaurant.html',
					'./css/styles.css',
					'./js/dbhelper.js',
					'./js/main.js',
					'./js/restaurant_info.js',
					'./data/restaurants.json',
					'./img/1.jpg',
					'./img/2.jpg',
					'./img/3.jpg',
					'./img/4.jpg',
					'./img/5.jpg',
					'./img/6.jpg',
					'./img/7.jpg',
					'./img/8.jpg',
					'./img/9.jpg',
					'./img/10.jpg'
					];

//to store the cache in the cache storage
 self.addEventListener('install',function(event){
 	event.waitUntil(
 		caches.open(staticCache)
 		.then(function(cache){
 			console.log('cache is opened');
 			return cache.addAll(staticCacheData);
 		})

 		);
 })

 //to fetch the data from the file
 self.addEventListener('fetch',function(event){
 	event.respondWith(
 		caches.open(staticCache).then(function(cache){
 			return cache.match(event.request).then(
 				function(response){
 					return response || fetch(event.request).
 					then(function(response){
 						cache.put(event.request,response.clone(
 							));
 						return response;
 					});
 				});
 		})
 		);
 });