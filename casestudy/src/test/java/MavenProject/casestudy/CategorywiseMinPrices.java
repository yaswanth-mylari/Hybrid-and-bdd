package MavenProject.casestudy;

import java.io.IOException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import pageLocaters.furniture;
import resources.base;

public class CategorywiseMinPrices extends base{
	public static Logger log=LogManager.getLogger(base.class.getName());
	@Test
	public void getPrices() throws IOException, InterruptedException {
		WebElement ele=null;
		driver=initializeDriver();
		driver.get(p.getProperty("searchurl"));
		base.closePopup();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		
		furniture f=new furniture(driver);
		ele=f.goToAllFurniture();
		jse.executeScript("arguments[0].click()", ele);
		log.info("clicked on allfurniture");
		Thread.sleep(2000);
		f.goToStudyRoom().click();
		log.info("clicked on study room tables");
		List<WebElement> price = f.getCategories();
		for (int i1 = 0; i1 < price.size(); i1++) {
			 if(i1!=3) {
			 System.out.print("Price: ");
	            getPrice(price.get(i1).getText());
	        }
		}
		log.info("got all category prices");
		
	}
	public static void getPrice(String s) {
		int k=0;
		String[] lis = s.split(" ");
		for(int i=0;i<lis.length;i++) {
			if(lis[i].equals("starting"))	{
				k=i;
				break;
			}
		}
		System.out.println(lis[k+2].substring(1));
	}
}