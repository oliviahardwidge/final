
function checkPrime(number) {

    if (number % 1 != 0 || number <= 0) {
            return "not prime" ;
        }
        else if(number > 4) {
            for (var i = 2; i<= number / 2; i++) {
                if (number % 1 == 0 || number % i == 0) {
                    return "Not Prme"
                }

            }
            return "Prime";
        }
        else {
            return "PRIME";
        }
    }

function table (n){
    var rows = n;
    var cells = n;
    document.write("<table border= 1>");
    for (i = 1; i<= rows; i++){
        document.write("<tr>");
        for(j =1; j <= cells; j++) {
            document.write("<td>", i * j, "<td>");

        }
        document.write("</tr>")
    }
    reutrn("</table>")
}

f
