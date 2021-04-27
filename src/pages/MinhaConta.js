import React, { useEffect, useState } from "react";
import { PageHeader, Descriptions, Button, form } from "antd";
import { LogoutOutlined } from '@ant-design/icons';

const MinhaConta = () => {

    return (
        <>
            <PageHeader title="Minha conta" subTitle="Configurações" />
            <div style={{ margin: 30 }}>
                <form>
                    <input type='text' placeholder='Informe o nome' />
                    <input type='number' placeholder='Informe o telefone' />
                    <input type='text' placeholder='Informe o e-mail' />
                    <input type='number' placeholder='Informe a data de nascimento' />
                    <input type='submit' value= 'Cadastrar' />
                </form>
                <Descriptions title="Dados do usuário">
                    <Descriptions.Item label="Nome completo"> Maria Márcia Felício de Oliveira</Descriptions.Item>
                    <Descriptions.Item label="Telefone">074999186897</Descriptions.Item>
                    <Descriptions.Item label="E-mail">marcia.ufpb10@gmail.com</Descriptions.Item>
                    <Descriptions.Item label="Data de nascimento">05/08/1969</Descriptions.Item>
                    <Descriptions.Item label="Endereço">
                        Av. Osvaldo Vitória, 73, Centro, Mundo Novo - BA
                </Descriptions.Item>
                </Descriptions>
                <Button type="primary" size={"large"}>  <LogoutOutlined />Sair </Button>

            </div>
        </>
    );
};
export default MinhaConta;