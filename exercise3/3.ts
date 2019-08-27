/**
 * Modify the regular expressions to match the sentence/comment.
 */

if (
    "This sentense does not start with a digit like 1,2,3,4".match(
        new RegExp(".*")
    )
) {
    throw new Error("1");
}

if (
    "This sentense does end with a digit like 1,2,3,4".match(new RegExp(".*"))
) {
    throw new Error("2");
}

//Match every m that is NOT followed by a letter from j to z
var rex = new RegExp(".*");
if ("ma".match(rex)[1] != "m" || "mz".match(rex) != null) {
    throw new Error("3");
}
