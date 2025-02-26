describe("Open Sauce Demo", () => {
  const baseURL = "https://www.saucedemo.com/";
  class LoginPage{
    pageTitle = 'div.login_logo';
    inputUsername = 'input#user-name';
    inputPassword = 'input#password';
    loginButton = 'input#login-button';
  }

  beforeEach(() => {
      cy.visit(baseURL);
      cy.get(loginPage.pageTitle).should('have.text','Swag Labs');
      cy.get(loginPage.inputUsername).type('standard_user');
      cy.get(loginPage.inputPassword).type('secret_sauce');
      cy.get(loginPage.loginButton).click();
  });


  class InventoryPage{
    pageTitle = 'div.app_logo';
    burger = 'button#react-burger-menu-btn';
    items = 'div.inventory_item button';
    shoppingCart = 'a.shopping_cart_link';
    shoppingCartBadge = 'a.shopping_cart_link span.shopping_cart_badge';
    firstItemTitle = 'div.inventory_list>div:nth-child(1) div.inventory_item_name';
    firstItemPrice = 'div.inventory_list>div:nth-child(1) div.inventory_item_price';
    sidebarLogout = 'a#logout_sidebar_link';
  }

  class CartPage{
    secondaryTitle = 'div.header_secondary_container span';
    checkoutButton = 'button#checkout';
  }

  class ProductPage{
    itemName = 'div.inventory_details_name';
    itemPrice = 'div.inventory_details_price';
    backToProductsButton = 'button#back-to-products';
  }

  class YourInformationPage{
    firstName = 'input#first-name';
    lastName = 'input#last-name';
    postalCode = 'input#postal-code';
    continueButton = 'input#continue';
  }

  class OverviewPage{
    cartItems = 'div.cart_item';
    finishButton = 'button#finish';
  }

  class CompletePage{
    pageTitle = 'h2.complete-header';
    backToHomeButton = 'button#back-to-products';
  }

  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const invPage = new InventoryPage();
  const cartPage = new CartPage();
  const yourInformationPage = new YourInformationPage();
  const overviewPage = new OverviewPage();
  const completePage = new CompletePage();

  it("Select 1 Product and Validate",()=> {
    let firstItemName = "";
    let firstItemPrice = "";
    
    cy.get(invPage.firstItemTitle).then(($item)=>{
      firstItemName = $item.text();
    })
    cy.get(invPage.firstItemPrice).then(($item)=>{
      firstItemPrice = $item.text();
      cy.get(invPage.firstItemTitle).click();
      cy.get(productPage.itemName).should('have.text',firstItemName);
      cy.get(productPage.itemPrice).should('have.text',firstItemPrice);
      cy.get(productPage.backToProductsButton).click();
    })
  });

  it("Select All Product and Buy",()=> {
    let countItem = 0;
    cy.get(invPage.items).each((item,index)=>{
      countItem++;
      cy.log(countItem.toString());
      cy.wrap(item).click();
    }).then(()=> {
      cy.get(invPage.shoppingCart).scrollIntoView();
      cy.get(invPage.shoppingCartBadge).should('have.text',countItem.toString());
      cy.get(invPage.shoppingCart).click()
    })

    cy.get(cartPage.checkoutButton).click();

    cy.get(yourInformationPage.firstName).type("John");
    cy.get(yourInformationPage.lastName).type("Doe");
    cy.get(yourInformationPage.postalCode).type("12345");
    cy.get(yourInformationPage.continueButton).click();

    cy.get(overviewPage.cartItems).then((item)=> {
      cy.get(overviewPage.cartItems).should('have.length',countItem);
    })
    cy.get(overviewPage.finishButton).click();
    cy.get(completePage.pageTitle).should('have.text', "Thank you for your order!");
    cy.get(completePage.backToHomeButton).click();
  });

  it("Logout", () => {
    cy.get(invPage.burger).click();
    cy.get(invPage.sidebarLogout).click();
  });
})