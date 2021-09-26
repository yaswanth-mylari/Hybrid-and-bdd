package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import pageLocaters.decor;
import resources.base;

public class decorMirrorPrice extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void setPriceLimit() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		decor d=new decor(driver);
		Actions a=new Actions(driver);
		a.moveToElement(d.goToDecor()).build().perform();
		ele=d.goToWallMirrors();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on wall mirrors in decor");
		//base.closePopup();
		d.clickInStock().click();
		log.info("selected instock products");
		Thread.sleep(3000);
		String mirror=d.getMirrorname().getText();
		String cost=d.getMirrorcost().getText();
		log.info("got first mirror name and cost");
		System.out.println("Mirror type: "+mirror+" ,cost= "+cost.substring(1));
	}	
}
