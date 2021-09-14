data={
    "Account": [
        {
            "id": 1,
            "username": "yifanyes",
            "first_name": "yifan",
            "last_name": "ye",
            "country": "china",
            "state": "zhejiang",
            "city": "wenzhou",
            "address": "xue yan xi lu",
            "email": "yif00raiser@gmail.com",
            "_password" : "tengodepresion",
            "_is_active" : True,
            "payment_type" : "Crypto"
        },
        {
            "id": 2,
            "username": "colorante",
            "first_name": "jorge",
            "last_name": "galvez",
            "country": "turquia",
            "state": "ankara",
            "city": "yenimahalle",
            "address": "varlik, etlik cd, 06170",
            "email": "jorge_gd@gmail.com",
            "_password" : "warhammer",
            "_is_active" : True,
            "payment_type" : "Crypto"
        },
        {
            "id": 3,
            "username": "lachacha",
            "first_name": "victoria",
            "last_name": "laplana",
            "country": "venezuela",
            "state": "caracas",
            "city": "caracas",
            "address": "la bombilla petare",
            "email": "vicky_lp@gmail.com",
            "_password" : "gatosbailarines",
            "_is_active" : True,
            "payment_type" : "Crypto"
        },
    ],
    "Product":[
        {
					"id": 1,
					"product_name": "Hakama de kendo",
					"price": 12,
					"media":
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Hay alguna mancha de sangre sin importancia",
					"category": "Clothing",
                    "account_id":1
				},
				{
					"id": 2,
					"product_name": "Tabla de planchar",
					"price": 142,
					"media":
						"https://images.pexels.com/photos/3844786/pexels-photo-3844786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Mas plana que mi novia",
					"category": "Appliances",
                    "account_id":1
				},
				{
					"id": 3,
					"product_name": "Samsung A7",
					"price": 250,
					"media":
						"https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
 					"text": "Tiene cierto golpe en la caja, pero fue por el alunizaje",
					"category": "Clothing",
                    "account_id":1
				},
				{
					"id": 4,
					"product_name": "Samsung A1",
					"price": 1605,
					"media":
						"https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Recien robado de la tienda, como nuevo",
					"category": "Cellphones",
                    "account_id":2
				},
				{
					"id": 5,
					"product_name": "Samsung A3",
					"price": 15,
					"media":
						"https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Lo dejo tan barato porque tiene un agujero de bala.",
					"category": "Cellphones",
                    "account_id":2
				},
				{
					"id": 6,
					"product_name": "Iphone X",
					"price": 5,
					"media":
						"https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Un movil para demostrar tu status social y que no te confundan con la plebe",
					"category": "Cellphones",
                    "account_id":2
				},
				{
					"id": 7,
					"product_name": "Bate de beisbol",
					"price": 6,
					"media":
						"https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Perfecto para probarlo con tu amigo moroso",
					"category": "Sports",
                    "account_id":3
				},
				{
					"id": 8,
					"product_name": "El camino de los reyes",
					"price": 54,
					"media":
						"https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Es un libro corto de 1200 paginas, se lee en una tarde",
					"category": "Movies, Books & Music",
                    "account_id":3
				},
				{
					"id": 9,
					"product_name": "Comodore amiga A500",
					"price": 65,
					"media":
						"https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"text": "Es un pc gaming con una grafica de ultima generacion perfecta para jugar al lol en ultra",
					"category": "Computers",
                    "account_id":3
				}

    ],
    "Wishlist":[
        {

            "from_account": 1,
            "have_product": 2,
        },
        {

            "from_account": 2,
            "have_product": 9,
        },
        {

            "from_account": 1,
            "have_product": 6,
        },
        {

            "from_account": 1,
            "have_product": 8,
        },
        {

            "from_account": 1,
            "have_product": 9,
        },
        {

            "from_account": 3,
            "have_product": 1,
        },
        {

            "from_account": 3,
            "have_product": 4,
        }
    ],

}