package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import pageLocaters.matress;
import resources.base;

public class dreamliteMatresscheck extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void logindetails() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		matress m=new matress(driver);
		Actions a=new Actions(driver);
		a.moveToElement(m.goToMatress()).build().perform();
		ele=m.goToMatressByRange();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on matress by range");
		System.out.println(m.getHeading().getText());
		log.info("Dreamlite Matress is present");
		
	}
}
