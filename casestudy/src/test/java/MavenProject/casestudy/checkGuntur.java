package MavenProject.casestudy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;
import junit.framework.Assert;
import pageLocaters.delivery;
import resources.base;

public class checkGuntur extends base {
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void findGuntur() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		delivery de=new delivery(driver);
		ele=de.clickMorePlaces();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on the more locations");
		driver.get("https://www.urbanladder.com/locations?src=footer");
		//base.closePopup();
		excelcode ec=new excelcode();
		ArrayList<String> lis = (ec.getdata("city", "Sheet1", "testdata", ".\\src\\main\\java\\resources\\booking.xlsx"));
		
		List<WebElement> cities = de.grabAllPlaces();
		int flag=0;
		for(int i=0;i<cities.size();i++) {
			if(cities.get(i).getText().equalsIgnoreCase(lis.get(1))) {
				flag=1;
				break;
			}
		}
		if(flag==1) {
			System.out.println("Guntur is present");
			Assert.assertTrue(true);
			log.info("Required place is present");
		}
		else {
			Assert.assertTrue(false);
		}
		
	}
}
