package pageLocaters;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class store {
	public WebDriver driver;
	public store(WebDriver driver) {
		this.driver=driver;
	}
	By store=By.cssSelector("*[href=\"../../furniture-stores?src=header\"]");
	By details=By.cssSelector("*[href=\"/furniture-stores/bangalore/jp-nagar?src=stores_listing\"]");
	By address=By.xpath("//*[@id=\"store-details\"]/div[4]/div[1]/address/div[1]");
	public WebElement goToStore() {
		return driver.findElement(store);
	}
	public WebElement goToViewDetails() {
		return driver.findElement(details);
	}
	public WebElement getAddress() {
		return driver.findElement(address);
	}
}
