import db from "../config/database";

export async function solicitarStatusLivros(status: string) {
    const statusId = await db.statusDosLivros.findUnique({
        where: {
            status: status
        }
    });
    return statusId.id;
}

export async function solicitarStatusEmprestimos(status: string) {
    const statusId = await db.statusDosEmprestimos.findUnique({
        where: {
            status: status
        }
    });
    return statusId.id;
}