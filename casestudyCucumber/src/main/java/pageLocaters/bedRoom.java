package pageLocaters;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class bedRoom {
	public WebDriver driver;
	By beds=By.cssSelector("*[class=\"topnav_item bedroomunit\"]");
	By kingsize=By.cssSelector("*[href=\"/king-size-bed?src=g_topnav_bedroom_beds_king-size-beds\"]");
	By pricelimit=By.id("price_limit_6954-20561");
	By price=By.cssSelector("*[data-group=\"price\"]");
	public bedRoom(WebDriver driver) {
		this.driver=driver;
	}
	public WebElement goToBeds() {
		return driver.findElement(beds);
	}
	public WebElement goToKingSize() {
		return driver.findElement(kingsize);
	}
	public WebElement goToPrice() {
		return driver.findElement(price);
	}
	public WebElement setPrice() {
		return driver.findElement(pricelimit);
	}
}
