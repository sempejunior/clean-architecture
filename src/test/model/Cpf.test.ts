import { Cpf } from "../../model/Cpf";

test("Invalid Cpfs", function () {
    let cpf = new Cpf('000000000000');
    expect(cpf.validate()).toBe(false);

    cpf = new Cpf('011.222.333-44');
    expect(cpf.validate()).toBe(false);
});


test("Valid Cpfs", function () {
    let cpf = new Cpf('017.837.930-15');
    expect(cpf.validate()).toBe(true);

    cpf = new Cpf('258075.17008');
    expect(cpf.validate()).toBe(true);

});