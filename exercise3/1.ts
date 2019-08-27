/**
 * The final callback(cb, line 5) is expected to be called with retVal === true
 */

const testFunc = function(cb: (retVal: boolean) => void): void {
    var result = 0;
    const parseContent = function() {
        result += 2;

        cb(result == 3);
    };

    /*
     Modify below here
     */
    const getWebsiteContent = function(): void {
        setTimeout(function() {
            //mocking an external request here
            result += 1;
        }, 300);
    };
    getWebsiteContent();
    parseContent();
};
