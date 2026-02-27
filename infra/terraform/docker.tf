resource "docker_volume" "stateful" {
  for_each = var.create_docker_volumes ? var.docker_volumes : toset([])
  name     = "${var.compose_project_name}_${each.value}"
}
