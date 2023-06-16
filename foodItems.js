const foodItems=[
    {
      "id":"1",
      "name": "Pizza",
      "price": "$10.99",
      "desc": "Indulge in our hot and cheesy pizza, made with the freshest ingredients and cooked to perfection on a crispy crust. Choose from a variety of toppings to create your perfect pizza. Whether you're a meat lover, a veggie enthusiast, or somewhere in between, we've got something to satisfy your cravings. One bite and you'll be hooked!",
      "image": "https://www.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/845x440/image.jpg"
    },
    {
      "id":"2",
      "name": "Burger",
      "price": "$6.99",
      "desc" : "Sink your teeth into our juicy beef patty, nestled between a soft bun and topped with lettuce, tomato, and onion. Our burgers are made with only the freshest ingredients and are always cooked to order. Customize yours with your favorite toppings and pair it with our crispy fries for the ultimate burger experience.",
      "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id":"3",
      "name": "Salad",
      "price": "$8.99",
      "desc": "Enjoy a delicious and healthy meal with our fresh salads. Made with a variety of crisp greens and veggies, our salads are packed with flavor and nutrition. Top it off with your favorite protein and dressing for a satisfying and guilt-free meal.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg"
    },
    {
      "id":"4",
      "name": "Sushi",
      "price": "$12.99",
      "desc" : "Experience the ultimate in Japanese cuisine with our handcrafted sushi rolls and sashimi. Made with the freshest ingredients and expertly prepared by our sushi chefs, our sushi is a feast for the senses. From classic rolls to creative combinations, there's something for every sushi lover at our restaurant.",
      "image": "https://media.istockphoto.com/id/1369614844/photo/cook-pouring-olive-oil-on-the-fresh-colorful-spring-vegetable-salad-in-the-blue-bowl.webp?b=1&s=170667a&w=0&k=20&c=wgLQUGMNar-mH5jNtd74eKkIHANL7WiHulMiXAN-U_s="
    },
    {
      "id":"5",
      "name": "Ice Cream",
      "price": "$4.99",
      "desc" : "Satisfy your sweet tooth with our creamy and delicious ice cream, made in-house with only the freshest ingredients. Enjoy a classic flavor like vanilla or chocolate, or try one of our unique and creative flavors. Perfect for a sweet treat any time of day!",
      "image": "https://media.istockphoto.com/id/1396897706/photo/vanilla-soft-serve-ice-cream-cone.webp?b=1&s=170667a&w=0&k=20&c=S6oypYSoesaaKrndBk1POlIVhojg4WIv3Br0eplLuoA="
    },
    {
      "id":"6",
      "name": "Pasta",
      "price": "$9.99",
      "desc" : "Indulge in our classic Italian pasta dishes, made with your choice of noodles and sauce. From spaghetti and meatballs to fettuccine alfredo, our pasta dishes are made with only the freshest ingredients and are sure to satisfy your cravings for comfort food.",
      "image": "https://media.istockphoto.com/id/1402719854/photo/creamy-pasta-with-mushroom-penne-pasta-with-mushrooms.webp?b=1&s=170667a&w=0&k=20&c=7pVyeNm368PSAtsMVfBUY_job00hjNC1Eptzq96P4sU="
    },
    {
      "id":"7",
      "name": "Sandwich",
      "price": "$7.99",
      "desc" : "Experience the ultimate in sandwich perfection with our delicious and creative menu options. Made with freshly-baked bread and high-quality ingredients, our sandwiches are perfect for a quick and satisfying meal. From classic deli sandwiches to unique and creative combinations, there's something for everyone on our menu.",
      "image": "https://media.istockphoto.com/id/1387158607/photo/croissant-with-scrambled-eggs-and-arugula-breakfast-table.webp?b=1&s=170667a&w=0&k=20&c=G2HoevZKbCEKIm6hAh9Mu8wj_QqViDo41OAbkmShZSw="
    },
    {
      "id":"8",
      "name": "Steak",
      "price": "$15.99",
      "desc": "Treat yourself to a mouthwatering steak, grilled to perfection and served with your choice of sides. Made with the highest-quality cuts of beef, our steaks are tender, juicy, and full of flavor. Perfect for a special occasion or any time you want to indulge in a delicious meal.",
      "image": "https://media.istockphoto.com/id/155144263/photo/big-rib-eye-steak-with-bite-cut-out.webp?b=1&s=170667a&w=0&k=20&c=BLlS9FGrFF-Gv0oSDQQIWSAlHCYM4DqVKEsRMjkraTc="
    },
    {
      "id":"9",
      "name": "Soup",
      "price": "$5.99",
      "desc" : "Warm up with a bowl of our delicious homemade soup, made from scratch with only the freshest ingredients. From classic tomato soup to hearty chicken noodle, our soups are perfect for a cozy and comforting meal any time of day. Pair it with a fresh salad or sandwich for the ultimate lunch combo.",
      "image": "https://media.istockphoto.com/id/1404763528/photo/homemade-broccoli-soup-with-cheddar-cheese.webp?b=1&s=170667a&w=0&k=20&c=Svug7jSNVdyidCYq3bvThHtd54lIbD9ioW6tHh3MkUo="
    },
    {
      "id":"10",
      "name": "Tacos",
      "price": "$8.99",
      "desc" :  "Satisfy your cravings for Mexican cuisine with our delicious tacos. Made with your choice of protein and toppings, our tacos are bursting with bold and authentic flavors. Served with a side of chips and salsa, they're the perfect meal for any occasion.",
      "image": "https://media.istockphoto.com/id/1347087219/photo/assortment-of-delicious-authentic-tacos-birria-carne-asada-adobada-cabeza-and-chicharone.webp?b=1&s=170667a&w=0&k=20&c=ea26j7XBxfyCPZynRh_8TXOCcCRzUfHJB_1e9TMxK1o="
    },
    {
      "id":"11",
      "name": "Chicken Wings",
      "price": "$11.99",
      "desc" : "Get your hands dirty with our crispy and juicy chicken wings, available in a variety of flavors. From classic buffalo to sweet and sticky BBQ, our wings are sure to satisfy your cravings for bold and delicious flavors. Served with a side of celery and carrots for the perfect balance.",
      "image": "https://media.istockphoto.com/id/168307283/photo/isolated-hot-wing.webp?b=1&s=170667a&w=0&k=20&c=HLmMN7An4OQEPjvGulvwGax_y-Zi21wONbFvRYwLsKg="
    },
    {
      "id":"12",
      "name": "Pancakes",
      "price": "$7.49",
      "desc" : "Indulge in our fluffy and delicious pancakes, served with butter and syrup for the ultimate breakfast experience. Whether you prefer a classic stack of buttermilk pancakes or a creative flavor like chocolate chip or blueberry, our pancakes are always made to order and sure to satisfy.",
      "image": "https://media.istockphoto.com/id/1348821333/photo/crepes.webp?b=1&s=170667a&w=0&k=20&c=lXPDM99AL-zTymq0lKPgIG5Xj7NafkeHTgQ_q1e0ZF0="
    },
    {
      "id":"13",
      "name": "French Fries",
      "price": "$3.99",
      "desc" : "Satisfy your cravings for salty goodness with our crispy and delicious french fries. Perfectly seasoned and always cooked to order, our fries are the ultimate side dish for any meal. Pair them with a burger, sandwich, or just enjoy them on their own for a tasty snack.",
      "image": "https://media.istockphoto.com/id/155287019/photo/fries-in-a-cardboard-tray-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=WuImmnfBj8E81q1FlcyifOHzvE22CZjttXXYPk32OfM="
    },
    {
      "id":"14",
      "name": "Burrito",
      "price": "$9.49",
      "desc" : "Enjoy a taste of Mexico with our delicious and satisfying burritos. Stuffed with your choice of protein, rice, beans, and toppings, our burritos are sure to hit the spot. Served with a side of chips and salsa for the ultimate Mexican feast.",
      "image": "https://media.istockphoto.com/id/1317280854/photo/mexican-rice-and-chicken-burrito.webp?b=1&s=170667a&w=0&k=20&c=QmhqI6sR8HPFKbL2pyi4fHkyxCDMFtw99qrSu6CdgaI="
    },
    {
      "id":"15",
      "name": "Nachos",
      "price": "$6.99",
      "desc" : "Get a taste of Mexico with our delicious and hearty nachos. Loaded with melted cheese, beans, salsa, and your choice of protein, our nachos are perfect for sharing or enjoying on your own. Served with a side of sour cream and guacamole for the ultimate flavor explosion.",
      "image": "https://media.istockphoto.com/id/1257616493/photo/rice-chips.webp?b=1&s=170667a&w=0&k=20&c=2nxFnpyxSVYipCwvWW9Ud7NK4fxFaQT8B2yVSazAw9g="
    },
    {
      "id":"16",
      "name": "Fish and Chips",
      "price": "$11.99",
      "desc": "Experience the best of British cuisine with our classic fish and chips. Served with a side of perfectly seasoned french fries, our fish and chips are made with the freshest ingredients and are always perfectly crispy on the outside and tender on the inside.",
      "image": "https://media.istockphoto.com/id/475043592/photo/fish-and-chips-fries-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=4hIgoLUfuwKJWlqNTxHd6nB0fgymPVPSi9hlZ8Q147Y="
    },
    {
      "id":"17",
      "name": "Fried Chicken",
      "price": "$8.99",
      "desc": "Indulge in our crispy and delicious fried chicken, made with only the finest cuts of chicken and the perfect blend of spices. Served with your choice of sides for the ultimate meal experience. Perfect for a special occasion or any time you're craving something indulgent and satisfying.",
      "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id":"18",
      "name": "Sushi Rolls",
      "price": "$14.99",
      "desc" : "Experience the ultimate in Japanese cuisine with our handcrafted sushi rolls. Made with only the freshest and highest-quality ingredients, our sushi rolls are the perfect balance of flavor, texture, and visual appeal. From classic rolls to creative combinations, we have something for every sushi lover.",
      "image": "https://plus.unsplash.com/premium_photo-1668143360807-4e654dc5bae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGklMjByb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    },
    {
      "id":"19",
      "name": "Hot Dog",
      "price": "$5.49",
      "desc" : "Enjoy a classic American hot dog, served on a soft bun with your choice of toppings. Perfect for a quick and tasty snack anytime you're on the go.",
      "image": "https://plus.unsplash.com/premium_photo-1685103586466-86cfeb715a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id":"20",
      "name": "Mashed Potatoes",
      "price": "$4.99",
      "desc":  "Warm up with our creamy and delicious mashed potatoes, the perfect side dish for any meal. Made with only the freshest potatoes and seasoned to perfection, our mashed potatoes are sure to satisfy your cravings for comfort food.",
      "image": "https://plus.unsplash.com/premium_photo-1668618296987-1ecd6dae2d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzaGVkJTIwcG90YXRvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
    },
];

module.exports=foodItems;