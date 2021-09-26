package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import pageLocaters.help;
import resources.base;

public class contactMail extends base {
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void getcontactmail() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		help h=new help(driver);
		h.goToHelp().click();
		log.info("clicked on help button");
		h.goToContactus().click();
		String contactemail=h.getMail().getText();
		log.info("got contact email");
		System.out.println("contactemail: "+contactemail);
		
	}
}
