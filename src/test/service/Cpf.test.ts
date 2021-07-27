import { CpfService } from "../../service/CpfService";

test("Invalid Cpfs", function () {
    let cpf = '000000000000';
    expect(CpfService.validate(cpf)).toBe(false);

    cpf = '011.222.333-44';
    expect(CpfService.validate(cpf)).toBe(false);
});


test("Valid Cpfs", function () {
    let cpf = '017.837.930-15';
    expect(CpfService.validate(cpf)).toBe(true);

    cpf = '258075.17008';
    expect(CpfService.validate(cpf)).toBe(true);

});