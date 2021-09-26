package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import pageLocaters.sale;
import resources.base;

public class sofaDimensions extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void logindetails() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		sale s=new sale(driver);
		Actions a=new Actions(driver);
		a.moveToElement(s.goToSales()).build().perform();
		ele=s.goToSofa();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on sales");
		//base.closePopup();
		ele=s.goToViewProduct();
		jse.executeScript("arguments[0].click()", ele); 
		log.info("clicked on view product");
		driver.get("https://www.urbanladder.com/products/malabar-wooden-sofa-macadamia-brown?src=listing-wooden-sofas");
		String dimensions=s.getDimensions().getText();
		System.out.println("3seater dimensions: "+dimensions);
		log.info("got dimensions");
		
	}
}
