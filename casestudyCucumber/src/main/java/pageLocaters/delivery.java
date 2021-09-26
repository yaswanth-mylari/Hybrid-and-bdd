package pageLocaters;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class delivery {
	public WebDriver driver;
	By more=By.cssSelector("*[href=\"/locations?src=footer\"]");
	By places=By.xpath("//*[@id=\"content\"]/div[1]/div/div/div[1]/div[2]/a");
	
	public delivery(WebDriver driver) {
		this.driver=driver;
	}
	public WebElement clickMorePlaces() {
		return driver.findElement(more);
	}
	public List<WebElement> grabAllPlaces() {
		return driver.findElements(places);
	}
}
