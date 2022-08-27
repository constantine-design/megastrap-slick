'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bootstrapValignClasses = bootstrapValignClasses;

/** @jsx wp.element.createElement */

/*===================================================*/
/*                 HELPER FUNCTIONS                  */
/*===================================================*/

/* valign classes change */
function bootstrapValignClasses(valign) {
	switch (valign) {
		case 'top':
			return 'd-flex flex-column justify-content-start';
		case 'center':
			return 'd-flex flex-column justify-content-center';
		case 'bottom':
			return 'd-flex flex-column justify-content-end';
	}
	return 'd-flex flex-column';
}
