/**
 * The final callback(go, line 5) is expected to be called with retVal === true
 */

const myFunc = function(go: (retVal: boolean) => void): void {
    const doSomething = function(done: () => void) {
        done();
    };

    const a = {
        name: "a",
        getName: function() {
            doSomething(
                function() {
                    go(this.name == "a");
                } /*modify here*/ /*end modify here*/
            );
        },
    };

    return a.getName();
};
