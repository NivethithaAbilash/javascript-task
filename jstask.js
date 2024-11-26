let books = [
    { id: 1, title:"Book A",price: 100,stock: 10 },
    { id: 2, title:"Book B",price: 150, stock: 5 },
    { id: 2, title:"Book B" ,price: 250,stock: 8 },   
    { id: 3, title:"Book C",price: 500,stock: 2 },
    { id:4,title:"Book D",price:450, stock:11} ];

    let customers = [
        { id: 101,name:"personA", isExistingCustomer: true },
        { id: 102, name: "personB",isExistingCustomer:false },
    {id:103,name:" personC",isExistingCustomer:false} ];
    

        const uniqueBooks = Array.from(
            new Map(books.map((books) => [books.id, books])).values()
        );
        return uniqueBooks;
    }
    
    books = removeDuplicateBooks(books);
    console.log(books);
    
    const bookIds = [1, 4, 3]; // Selected book ids
   
    function getSelectedBooks(bookIds, allbooks) {
        return bookIds.map((id) => allbooks.find((book) => book.id === id));
    }
    
    const selectedBooks = getSelectedBooks(bookIds, books);
    console.log(selectedBooks);
    
// discount
const selectedBook = {  id: 3, title: "Book C", price: 500, stock: 2};
const isExistingCustomer = true;

function calculateDiscount(book, isExistingCustomer) {
    let discount = 0;

    if (isExistingCustomer) {
        if (book.price > 200) discount = book.price * 0.15;
    } else {
        if (book.price >= 100 && book.price <= 200) discount =book.price * 0.02;
        else if (book.price > 200 && book.price <= 500) discount = book.price * 0.05;
        else if (book.price > 500 && book.price <= 750)discount = book.price * 0.1;
        else if (book.price > 750)  discount = book.price * 0.15;
    }
  return discount;
}
console.log(calculateDiscount(selectedBook, isExistingCustomer));

//prepare bill
function prepareBill(selectedBooks, isExistingCustomer) {
    let totalPrice = 0;
    let totalDiscount = 0;
    const booksPurchased = selectedBooks.map((book) => {
    const discount = calculateDiscount(book, isExistingCustomer);
    const finalPrice = book.price - discount;
        totalPrice += finalPrice;
        totalDiscount += discount;

        return {
            title: book.title,quantity: 1,price: book.price , discount, totalPrice };
    });
return {
        booksPurchased,totalPrice,totalDiscount,
    };
}

const bill = prepareBill(selectedBooks, isExistingCustomer);
console.log(bill);


// update customer
const customerId = 4;
function updateCustomerDetails(customerId, customers, bill) {
    const customer = customers.find((c) => c.id === customerId);
    if (customer) {
        customer.lastPurchase = {date: new Date().toISOString(),books: bill.booksPurchased,totalAmount: bill.totalPrice,
        };
    }
    return customers;
}

const updatedCustomers = updateCustomerDetails(4, customers, bill);
console.log(updatedCustomers);

