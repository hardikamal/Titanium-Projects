
function openAddUser(e) {
	Alloy.createController('add').getView().open();
}

var model = arguments[0];

function openLink(e) {
	var win = Ti.UI.createWindow({
		fullscreen: false
	});
	win.add(Ti.UI.createWebView({
		url: model.get('link')
	}));
	if (OS_IOS) {
		Alloy.Globals.navgroup.openWindow(win);
	} else {
		win.open();
	}
}

function closeKeyboard(e) {
	e.source.blur();
}


/*
$.theColor.backgroundColor = model.get('color');
$.name.text = 'Name: ' + model.get('color');
$.hexCode.text = 'Hex: ' + model.get('hexCode');
$.wavelength.text = 'Wavelength: ' + model.get('wavelength');
*/
$.index.open();
