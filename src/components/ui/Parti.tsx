import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const Parti = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container | undefined) => {
        if (container) {
            console.log(container);
        }
    };

    return (
        init && <Particles id="tsparticles" url="http://foo.bar/particles.json" particlesLoaded={particlesLoaded} />
    );
};
