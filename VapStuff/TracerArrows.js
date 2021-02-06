import Projectile from '../lib/org/bukkit/entity/Projectile.js';
import Module from './Module.js';
export default class TracerArrows extends Module {
    onEntityShootBow(listener, event) {
        const shooter = event.getEntity();
        if (!this.isPlayer(shooter))
            return;
        const proj = event.getProjectile();
        if (!this.isProjectile(proj))
            proj.getLocation();
    }
    isProjectile(entity) {
        return entity instanceof Projectile.$javaClass;
    }
}
