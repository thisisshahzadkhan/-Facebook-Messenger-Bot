const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(process.env.SENDGRID_KEY);

module.exports.sendEmail = async (product) => {
    try {
        const mail = {
            to: 'thisisshahzadkhan@gmail.com', 
            from: 'firstName@respond.com', 
            subject: 'Buying',
            text: `Order for product.\nName: ${product.name}, Price: ${product.price}, Shipping Fee: ${product.shipping}`,
          }
        await sendGrid.send(mail);        
    }
    catch (error) {
        console.log(error);
    }
};