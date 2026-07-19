from jinja2 import Environment
from jinja2 import FileSystemLoader


env = Environment(
    loader=FileSystemLoader("app/templates")
)


class TemplateService:

    # Renders an HTML template with dynamic data
    def render(
        self,
        template_name: str,
        context: dict,
    ):

        template = env.get_template(
            template_name
        )

        return template.render(
            **context
        )


templateService = TemplateService()