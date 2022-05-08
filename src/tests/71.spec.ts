import simplifyPath from "../71";

test("71", () => {
    expect(simplifyPath("/home/")).toBe("/home")
    expect(simplifyPath("/../")).toBe("/")
    expect(simplifyPath("/home//foo/")).toBe("/home/foo")
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c")
})
