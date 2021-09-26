package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import pageLocaters.bedRoom;
import resources.base;

public class bedsPriceLimit extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void setPriceLimit() throws IOException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		bedRoom br=new bedRoom(driver);
		Actions a=new Actions(driver);
		a.moveToElement(br.goToBeds()).build().perform();
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		ele=br.goToKingSize();
		jse.executeScript("arguments[0].click()", ele);
		log.info("redirected to king size beds");
		//base.closePopup();
		a.moveToElement(br.goToPrice()).build().perform();
		ele=br.setPrice();
		jse.executeScript("arguments[0].click()", ele);
		log.info("set price limit succesfully");
	}
}
