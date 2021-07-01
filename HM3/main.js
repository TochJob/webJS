//1

for (let i = 0; i <= 10; i++){
	if (i === 0) {
		console.log(`${i} - это ноль`);
	}else if (i % 2 === 0){
		console.log(`${i} - четное число`);
	}else{
		console.log(`${i} - нечетное число`);
	}
}



//2

const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
			{
				userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};


console.log(`Автор: ${post.author}`);
console.log(`Дизлайки: ${post.comments[0].rating.dislikes}`);
console.log(`Id пользоватея: ${post.comments[1].userId}`);
console.log(`Комментарий: ${post.comments[1].text}`);



//3

// const products = [
// 	{
// 		id: 3,
// 		price: 200,
// 	},
// 	{
// 		id: 4,
// 		price: 900,
// 	},
// 	{
// 		id: 1,
// 		price: 1000,
// 	},
// ];

// products.forEach(product => {
// 	product.price = product.price - product.price * 0.15;
// 	console.log(product);
// })


//4
const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

let filter = products.filter(product => 'photos' in product && product.photos.length > 0)

console.log(filter);

const sortPrice = products.sort(function(price1, price2){
	return price1.price - price2.price 
})

console.log(sortPrice);


//6

for(let i = 'x'; i.length <= 20; i+='x'){
	console.log(i);
}