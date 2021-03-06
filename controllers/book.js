const Book = require('../models/book');

/* create new book */
module.exports.postBook = (req, res) => {
	Book.create({
		
		title: "Buku Komputer",
		desc: "Ini deskripsi",
		price: 50000,
		size: "21x15cm",
		writer: "Alya Ainun",
		publisher: "Elex Media Komputindo",
		page: "300",
		year_of_publish: 2016,
		isbn: 123456,
		category: "Computer"
		
	}).then((book) => {
		res.json(book);
	}).catch((error) => {
		throw error;
	})
}

/* untuk mengubah buku yang memiliki id: 1 */
module.exports.putBook = (req, res) => {
	let values = {
		title: "Buku Kesehatan",
		desc: "Ini Buku Kesehatan",
		price: 700000,
		size: "25x15cm",
		writer: "Yuli Rahayu",
		publisher: "Airlangga",
		page: "490",
		year_of_publish: 2018,
		isbn: 6453487462,
		category: "Edukasi Kesehatan"
	}
	
	Book
		.update(values, {
			where: {
				id: 1
			}
		})
		.then((book) => {
			res.json(book);
		}).catch((error) => {
			throw error;
		})
}

/* untuk menghapus buku yang memiliki id:2 */
module.exports.deleteBook = (req, res) => {
	Book.destroy({
		where: {
			id: 1
		}
	}).then((book) => {
		res.json(book);
	}).catch((error) => {
		throw error;
	})
}

/* view one book by id*/
module.exports.getDetail = (req, res) => {
	Book
		.findByPk(
			 req.params.id
		)
		.then((book) => {
			res.json(book);
		})
		.catch((error) => {
			throw error;
		})
}

/* view all book*/
module.exports.getList = (req, res) => {
	Book
		.findAll({
		})
		.then((book) => {
			res.json(book);
		})
		.catch((error) => {
			throw error;
		})
}