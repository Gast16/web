import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AdidasCampus {

    public static void main(String[] args) {

        Map<String, Double> sizes = new HashMap<>();
        sizes.put("36 EU", 230.00);
        sizes.put("36 1/3 EU", 230.00);
        sizes.put("37 1/3 EU", 230.00);
        sizes.put("38 EU", 230.00);
        sizes.put("38 1/3 EU", 230.00);
        sizes.put("39 1/3 EU", 230.00);
        sizes.put("40 EU", 230.00);
        sizes.put("40 2/3 EU", 230.00);
        sizes.put("41 1/3 EU", 230.00);
        sizes.put("42 EU", 230.00);
        sizes.put("42 1/3 EU", 230.00);
        sizes.put("43 1/3 EU", 230.00);

        // Get the size from user input using a Scanner
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your size: ");
        String size = scanner.nextLine();

        // Check if the size exists
        if (sizes.containsKey(size)) {
            // Get the price for the selected size
            double price = sizes.get(size);

            // Output the price
            System.out.println("The price for size " + size + " is: €" + price);
        } else {
            // Output an error message
            System.out.println("Invalid size.");
        }
    }
}