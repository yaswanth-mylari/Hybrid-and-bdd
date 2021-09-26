package MavenProject.casestudy;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import pageLocaters.store;
import resources.base;

public class jpnagarStoreAddress extends base {
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void signupdetails() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		store s=new store(driver);
		s.goToStore().click();
		log.info("clicked in store");
		s.goToViewDetails().click();
		
		System.out.println(s.getAddress().getText());
		log.info("got Jpnagar Store address");
		
	}
}
