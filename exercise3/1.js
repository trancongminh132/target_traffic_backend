/**
 * The final callback(cb, line 5) is expected to be called with retVal === true
 */
const testFunc = function (cb) {
    var result = 0;
    const parseContent = function () {
        result += 2;
        cb(result == 3);
    };

    /*
     Modify below here
     */
    cb = function (retVal) {
        return retVal;
    };

    const getWebsiteContent = function () {
        var promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve(result += 1), 300);
        });
        return promise;
    };

    getWebsiteContent().then(function(done) {
        parseContent();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxNQUFNLFFBQVEsR0FBRyxVQUFTLEVBQTZCO0lBQ25ELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sWUFBWSxHQUFHO1FBQ2pCLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFFWixFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztJQUVGOztPQUVHO0lBQ0gsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixVQUFVLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7SUFDRixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLFlBQVksRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyJ9