package pageLocaters;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class decor {
	public WebDriver driver;
	By decorunit=By.cssSelector("*[class=\"topnav_item decorunit\"]");
	By wallmirror=By.cssSelector("*[href=\"/wall-mirrors?src=g_topnav_decor_mirrors_wall-mirrors\"]");
	By available=By.id("filters_availability_In_Stock_Only");
	By name=By.xpath("//*[@id=\"content\"]/div[4]/ul/li[1]/div/div[5]/a/div[1]/span");
	By cost=By.xpath("//*[@id=\"content\"]/div[4]/ul/li[1]/div/div[5]/a/div[2]/span");
	
	
	public decor(WebDriver driver) {
		this.driver=driver;
	}
	public WebElement goToDecor() {
		return driver.findElement(decorunit);
	}
	public WebElement goToWallMirrors() {
		return driver.findElement(wallmirror);
	}
	public WebElement clickInStock() {
		return driver.findElement(available);
	}
	public WebElement getMirrorname() {
		return driver.findElement(name);
	}
	public WebElement getMirrorcost() {
		return driver.findElement(cost);
	}
	
}
