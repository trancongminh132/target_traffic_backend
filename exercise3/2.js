/**
 * The final callback(go, line 5) is expected to be called with retVal === true
 */
const myFunc = function (go) {
    const doSomething = function (done) {
        done();
    };
    const a = {
        name: "a",
        getName: function () {
            var self = this;
            doSomething(function () {
                go(self.name == "a");
            } /*modify here*/ /*end modify here*/);
        },
    };

    go = function (retVal) {
        return retVal;
    };

    return a.getName();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxNQUFNLE1BQU0sR0FBRyxVQUFTLEVBQTZCO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFVBQVMsSUFBZ0I7UUFDekMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsR0FBRztRQUNOLElBQUksRUFBRSxHQUFHO1FBQ1QsT0FBTyxFQUFFO1lBQ0wsV0FBVyxDQUNQO2dCQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQ3hDLENBQUM7UUFDTixDQUFDO0tBQ0osQ0FBQztJQUVGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyJ9