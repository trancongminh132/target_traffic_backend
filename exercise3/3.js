/**
 * Modify the regular expressions to match the sentence/comment.
 */
if ("This sentense does not start with a digit like 1,2,3,4".match(new RegExp(".*"))) {
    throw new Error("1");
}
if ("This sentense does end with a digit like 1,2,3,4".match(new RegExp(".*"))) {
    throw new Error("2");
}
//Match every m that is NOT followed by a letter from j to z
var rex = new RegExp(".*");
if ("ma".match(rex)[1] != "m" || "mz".match(rex) != null) {
    throw new Error("3");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxJQUNJLHdEQUF3RCxDQUFDLEtBQUssQ0FDMUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQ25CLEVBQ0g7SUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hCO0FBRUQsSUFDSSxrREFBa0QsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDNUU7SUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hCO0FBRUQsNERBQTREO0FBQzVELElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN4QiJ9