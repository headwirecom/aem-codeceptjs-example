Feature('Administering pages in AEM');

Scenario('Enter the Sites', (I) => {
	I.amOnPage('http://localhost:4502');

	I.see('Sign In', '#sign-in-title');
	I.fillField('#username', 'admin');
	I.fillField('#password', 'admin');
	I.pressKey('Enter');

	I.see('Projects', '.globalnav-homecard-title');
	I.see('Sites', '.globalnav-homecard-title');
	I.see('Experience Fragments', '.globalnav-homecard-title');
	I.see('Assets', '.globalnav-homecard-title');
	I.see('Forms', '.globalnav-homecard-title');
	I.see('Screens', '.globalnav-homecard-title');
	I.see('Personalization', '.globalnav-homecard-title');
	I.see('Commerce', '.globalnav-homecard-title');
	I.see('Communities', '.globalnav-homecard-title');

	I.click({'xpath': '//*[@id="globalnav-start-home-collection"]/coral-masonry-item[2]'});

	pause();
});