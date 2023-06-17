import { useApp } from 'innet';

const call = () => () => {
    useApp()();
};

export { call };
