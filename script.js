/**
 * 
 * classType defines seat selection Type
 * isIncrease sends boolean condition.
 */
function seatSelection(classType, isIncrease){
    document.getElementById(classType+'-class');
    const quantityInput = document.getElementById(classType+'-class-input');
    const ticketQuantity = parseInt(quantityInput.value);
    let modifyTickets = ticketQuantity
    if(isIncrease == true){
        modifyTickets = ticketQuantity+1;
    }
    if(isIncrease == false && modifyTickets > 0){
        modifyTickets = ticketQuantity-1;
    }
    quantityInput.value = modifyTickets;

    totalCalculation();
}
//Total Calculation Section
function totalCalculation(){

    const firstClassTickets = document.getElementById('first-class-input');
    const firstClassCount = parseInt(firstClassTickets.value);

    const economyClassTickets = document.getElementById('economy-class-input');
    const econmoyClassCount = parseInt(economyClassTickets.value);

    const subTotal = firstClassCount*150 + econmoyClassCount*100;
    const totalVat = subTotal*0.1;
    const totalPrice = subTotal+totalVat;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('vat').innerText = totalVat;
    document.getElementById('total').innerText = totalPrice;
    return totalPrice; // Returned for Summery Page Only.
}


/*Extra Ticket Summery Section*/

const submitButton = document.getElementById('submitButton').addEventListener('click',function(){

    //For Bringing my Thank you screen.
    document.getElementById("formArea").style.display = "none";
    document.getElementById('thankyou-text').style.display = "block";

   //Data Initialization For Picking Values.

    const firstClassTickets = document.getElementById('first-class-input');
    const firstClassCount = parseInt(firstClassTickets.value);
    const economyClassTickets = document.getElementById('economy-class-input');
    const econmoyClassCount = parseInt(economyClassTickets.value);
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const depDate = document.getElementById('departureDate').value;
    const retDate = document.getElementById('backDate').value;

    document.getElementById('departurePlace').innerText = departure;
    document.getElementById('flyingTo').innerText = arrival;
    document.getElementById('flightDate').innerText = depDate;
    document.getElementById('returnDate').innerText = retDate;
    document.getElementById('vipTicketQty').innerText = firstClassCount;
    document.getElementById('ecoTicketQty').innerText = econmoyClassCount;
    document.getElementById('summeryPrice').innerText = totalCalculation();
})